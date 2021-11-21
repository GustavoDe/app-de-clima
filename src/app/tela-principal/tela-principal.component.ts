import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
  cidade = "São Paulo";
  tempAgora = "";
  condicaoAgora = "";
  iconeCondicao = "";
  maxTempAtual = "";
  minTempAtual = "";
  constructor() { }
  
  ngOnInit(): void {
  }

  preencherInfodasTemperaturas = (dadosTemperatura: any) => {
    this.tempAgora = dadosTemperatura.current.temp_c;
    this.condicaoAgora = dadosTemperatura.current.condition.text;
    //this.maxTempAtual = dadosTemperatura.forecast.forecastDay[0].day.maxTemp_c
  }

  pesquisarCidade = async () => {
    const urlApi = `https://api.weatherapi.com/v1/forecast.json?key=4ec344e5cc55471582d211630212111&q=${this.cidade}&days=1&lang=pt`
    const dados = await fetch (urlApi);
    const dadosTemperatura = await dados.json()
    console.log(dadosTemperatura.forecast)
    this.preencherInfodasTemperaturas(dadosTemperatura);
  }


}
