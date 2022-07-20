var escapehtml = require('escape-html');

module.exports = ({ encryptionPublicCert, encryptedKey, digestAlgorithm }) => `
<KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#">
  <e:EncryptedKey xmlns:e="http://www.w3.org/2001/04/xmlenc#">
    ${digestAlgorithm}
    ${encryptionPublicCert}
    <e:CipherData>
      <e:CipherValue>${escapehtml(encryptedKey)}</e:CipherValue>
    </e:CipherData>
  </e:EncryptedKey>
</KeyInfo>
`;

