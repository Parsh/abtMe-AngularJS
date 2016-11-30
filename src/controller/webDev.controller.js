angular.module('myWebApp')
    .controller('webDevController', webDevController);


webDevController.$inject = ['CertificateService']

function webDevController(CertificateService) {

    webCtrl = this

    webCtrl.getCertificate = function(certificateId) {
        webCtrl.id = certificateId


        CertificateService.setCertificateID(webCtrl.id);

    }

}
