#!/bin/bash

echo 'CONNECTED TO decks_db'
docker exec -i decks_postgres psql -U postgres decks_db