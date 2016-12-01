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
    }, {
        name: 'DatabasesWithPython',
        img: 'DatabasesWithPython.jpg'
    }, {
        name: 'PythonFundamental',
        img: 'PythonFundamental.jpg'
    }, {
        name: 'PythonCapstone',
        img: 'PythonCapstone.jpg'
    }, {
        name: 'PythonDataStructure',
        img: 'PythonDataStructure.jpg'
    }, {
        name: 'PythonSpecialization',
        img: 'PythonSpecialization.jpg'
    }, {
        name: 'PythonToAccessWebData',
        img: 'PythonToAccessWebData.jpg'
    }, {
        name: 'ML-Classification',
        img: 'ML-Classification.jpg'
    }, {
        name: 'ML-ClusteringAndRetrieval',
        img: 'ML-ClusteringAndRetrieval.jpg'
    }, {
        name: 'ML-Foundation',
        img: 'ML-Foundation.jpg'
    }, {
        name: 'ML-Regression',
        img: 'ML-Regression.jpg'
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
