import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { CardsService } from './cards.service';




describe('CardsService', () => {
  let service: CardsService;
  let http: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CardsService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve chamar o Get Pokemon por Id com endpoint correto', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    const idGengar: string = 'xy8-60';

    service.getPokemon(idGengar);
    expect(spy).toHaveBeenCalledWith(`${environment.urlApi}/${idGengar}?select=id,name,types,images,attacks,weaknesses`)
  })  
});
