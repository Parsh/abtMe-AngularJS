angular.module('myWebApp')
    .service('CertificateService', CertificateService);

CertificateService.$inject = ['$cookies', '$cookieStore']

function CertificateService($cookies, $cookieStore) {
    service = this;

    service.setCertificateID = function(index) {
        service.id = index;

        $cookieStore.put('certificateID', service.id);
    }

    service.getCertificateID = function() {
        service.id = $cookieStore.get('certificateID');

        return service.id;
    }
}
