#!/bin/sh

# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_STORE_PASSWORD" \
--output ./android/app/demoapp_keystore.jks ./android/app/demoapp_keystore.jks.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_KEY_PASSWORD" \
--output ./android/app/google-private-key.json ./android/app/google-private-key.json.gpg