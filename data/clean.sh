#!/bin/bash

sed -i -E \
  -e "s/GEOMETRY NOT NULL/TEXT NOT NULL/g" \
  -e "s/ST_GeomFromText\('([^']*)', *[0-9]+\)/'\1'/g" \
  classicmodels.sql
sed -i "s/officeLocation GEOMETRY NOT NULL/officeLocation TEXT NOT NULL/; s/customerLocation GEOMETRY NOT NULL/customerLocation TEXT NOT NULL/" classicmodels.sql
grep -c "GEOMETRY\|ST_GeomFromText" classicmodels.sql