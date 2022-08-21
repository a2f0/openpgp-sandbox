#!/usr/bin/env node
import * as openpgp from 'openpgp';
import { v4 as uuidv4 } from 'uuid';

const passphrase = uuidv4();
const { privateKey, publicKey, revocationCertificate } = await openpgp.generateKey({
    type: 'ecc',
    curve: 'curve25519',
    userIDs: [{ name: 'Test User', email: 'test@example.com' }],
    passphrase,
    format: 'armored'
});

console.log(privateKey);
console.log(publicKey);
console.log(revocationCertificate);
