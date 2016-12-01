angular.module('myWebApp')
    .controller('MLController', MLController);

MLController.$inject = ['CertificateService']

function MLController(CertificateService) {

    mlCtrl = this

    mlCtrl.getCertificate = function(certificateName) {

        CertificateService.setCertificateName(certificateName);

    }

}
