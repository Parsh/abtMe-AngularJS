angular.module('myWebApp')
    .controller('CertificateController', CertificateController);


CertificateController.$inject = ['CertificateService']

function CertificateController(CertificateService) {

    cCtrl = this;

    certificateList = CertificateService.getCertificateList();

    certificateName = CertificateService.getCertificateName();

    for (var each of certificateList) {

        if (each.name == certificateName) {
            cCtrl.certificate = "img/certificates/" + each.img
        }
    }
}
