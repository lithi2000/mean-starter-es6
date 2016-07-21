class todoService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/routerepert', {
            nom: data.nom , prenom: data.prenom, telephone:data.telephone
        })
    }

    getAll() {
        return this.$http.get('/api/routerepert')
    }

    getOne(id) {
        return this.$http.get('/api/routerepert/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/routerepert/' + id, {
            description: data
        })
    }

    delete(id) {
        return this.$http.delete('/api/routerepert/' + id)
    }

}
