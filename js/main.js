let urlApi = 'https://files.sirius-school.be/qpuc/';

let app = new Vue({
    el: '#app',
    data: {
      questionId: null,
      questionPosee: null,
      reponseUtilisateur: null,
      message: '',
      correct: 0,
      incorrect: 0
    }
  });