angular.module('myWebApp')
    .controller('webDevController', webDevController);


webDevController.$inject = ['CertificateService']

function webDevController(CertificateService) {

    webCtrl = this

    webCtrl.getCertificate = function(certificateName) {

        CertificateService.setCertificateName(certificateName);

    }

}
