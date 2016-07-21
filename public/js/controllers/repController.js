class repController {

    constructor(repertService) {
        this.repertService = repertService;
        this.load();
    }

    load() {
        this.repertService.getAll().then((res) => {
            this.routerepert = res.data;
        })
    }

    create() {
        this.repertService.create(this.repertoire).then(() => {
            this.repertoire = '';
            this.load()
        })
    }

    update(todo) {
        this.repertService.update(repertoire._id, repertoire.description).then(() => {
            this.load()
        })
    }

    delete(todo) {
        this.repertService.delete(repertoire._id).then(() => {
            this.load()
        })
    }

}
