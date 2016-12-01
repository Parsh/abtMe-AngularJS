angular.module('myWebApp')
    .service('CertificateService', CertificateService);

CertificateService.$inject = ['$cookies', '$cookieStore']

function CertificateService($cookies, $cookieStore) {
    service = this;

    certificateList = [{
        name: 'Android',
        img: 'Android.jpg'
    }, {
        name: 'Angular',
        img: 'Angular.jpg'
    }, {
        name: 'Bootstrap',
        img: 'Bootstrap.jpg'
    }, {
        name: 'HTMLCSS&JavaScript',
        img: 'HTMLCSS&JavaScript.jpg'
    }, {
        name: 'Java',
        img: 'Java.jpg'
    }, {
        name: 'Node',
        img: 'Node.jpg'
    }, {
        name: 'OOP',
        img: 'OOP.jpg'
    }];

    service.getCertificateList = function() {
        return certificateList;
    }

    service.setCertificateName = function(certificateName) {
        service.certificateName = certificateName;

        $cookieStore.put('certificateName', service.certificateName);
    }

    service.getCertificateName = function() {
        service.certificateName = $cookieStore.get('certificateName');

        return service.certificateName;
    }
}
