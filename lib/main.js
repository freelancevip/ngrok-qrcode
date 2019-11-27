const QRCodeTerminal = require('qrcode-terminal');
const QRCodePrint = require('qrcode');
const ngrok = require('ngrok');

function ngqr(authtoken) {
    ngrok.connect({
        addr: 9000,
        authtoken: authtoken
    }).then(url => {
        QRCodeTerminal.generate(url);
        QRCodePrint.toFile('./code.png', url);
    });
}

module.exports.ngqr = ngqr;
