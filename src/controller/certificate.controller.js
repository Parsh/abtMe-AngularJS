angular.module('myWebApp')
    .controller('CertificateController', CertificateController);


CertificateController.$inject = ['CertificateService']

function CertificateController(CertificateService) {

    cCtrl = this;

    cCtrl.id = CertificateService.getCertificateID();



    if (cCtrl.id == 1) {
        cCtrl.certificate = "img/certificates/Node.jpg";
    }
    if (cCtrl.id == 2) {
        cCtrl.certificate = "img/certificates/Angular.jpg";
    }
    if (cCtrl.id == 3) {
        cCtrl.certificate = "img/certificates/Bootstrap.jpg";
    }
    if (cCtrl.id == 4) {
        cCtrl.certificate = "img/certificates/Android.jpg";
    }
}
