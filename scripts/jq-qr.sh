#!/bin/bash

public_base_dir="${CWD}public/"

## Generate payment QR codes
## Create directory if it doesn't exist
qr_payments_dir="${public_base_dir}/payments"
mkdir -p "$qr_payments_dir"

## Generate QR codes
jq -c '.payments[] | select(.href != null) | {id, href}' "${public_base_dir}/data/payments.json" | while read -r line; do
    id=$(echo "$line" | jq -r '.id')
    href=$(echo "$line" | jq -r '.href')
    qrencode -o "${public_base_dir}/payments/qr_${id}.svg" -t SVG "$href"
done

## Generate VCard Download QR code
href=""
qrencode -o "${public_base_dir}/vcf/qr_digitalandyeu_andrii_ivashchuk.svg" -t SVG "$href"
