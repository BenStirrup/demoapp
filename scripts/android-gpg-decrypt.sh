#!/bin/sh

# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_PASSWORD" \
--output ./android/app/keystore.jks ./android/app/keystore.jks.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$ENCRYPT_PASSWORD" \
--output ./android/app/private-key.pepk ./android/app/private-key.pepk.gpg