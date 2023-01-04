const axios = require('axios');
const querystring = require('querystring');

class FootballData {
    /* constructor(token) {
        this.instance = axios.create({
            baseURL: 'http://api.football-data.org/v4/',
           //  timeout: 1000,
            headers: { 'X-Auth-Token': token }
        });
    } */


    /* Todas as competições do plano */
    competitions({area} = {}) {
        return this.instance.get(`/competitions?${querystring.stringify({areas: area})}`)
        .then(res => {
          if (res === null) {
            return false;
          } else {
            return res.data;
          }
        });
    }

    /* competiçao por ID */
    competition(competitionId) {
        return this.instance.get(`/competitions/${competitionId}`)
        .then(res => {
          if (res === null) {
            return false;
          } else {
            return res.data;
          }
        });
    }

    /* Times da competição */
    teams(competitionId, {stage} = {}) {
        return this.instance.get(`/competitions/${competitionId}/teams?${querystring.stringify({stage})}`)
        .then(res => {
          if (res === null) {
            return false;
          } else {
            return res.data;
          }
        });
    }

    /* Classificação por ID da competicao */
    standings(competitionId) {
        return this.instance.get(`/competitions/${competitionId}/standings`)
        .then(res => {
          if (res === null) {
            return false;
          } else {
            return res.data;
          }
        });
    }
    
    /* Partidas por ID da competicao */
    competitionMatches(competitionId, {dateFrom, dateTo, stage, status, matchday, group} = {}) {
        return this.instance.get(`/competitions/${competitionId}/matches?${querystring.stringify({dateFrom, dateTo, stage, status, matchday, group})}`)
        .then(res => {
          if (res === null) {
            return false;
          } else {
            return res.data;
          }
        });
    }

    matches({competitions, dateFrom, dateTo, status} = {}) {
        return this.instance.get(`/matches?${querystring.stringify({competitions, dateFrom, dateTo, status})}`)
    }

    match(id) {
        return this.instance.get(`/matches/${id}`)
    }

    teamMatches(id,{dateFrom, dateTo, status, venue} = {}) {
        return this.instance.get(`/teams/${id}/matches${querystring.stringify({dateFrom, dateTo, status, venue})}`)
    }

    team(id) {
        return this.instance.get(`/teams/${id}`)
    }

    areas(id) {
        return this.instance.get(`/areas/${id}`)
    }
}

module.exports = FootballData;