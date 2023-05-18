from flask import Flask, jsonify, request
import logging
import asyncio
import json
from dotenv import load_dotenv
from pathlib import Path
from typing import Any
from azure.storage.blob import BlobServiceClient
from azure.core.exceptions  import ResourceExistsError
import os
import uuid

load_dotenv()

app = Flask(__name__)  
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('fpds_survey')

blob_container_name = os.getenv("CONTAINER_NAME")
blob_connection_string = os.getenv("StorageConnectionString")
blob_service_client = BlobServiceClient.from_connection_string(blob_connection_string)

try:
    blob_service_client.create_container(name=blob_container_name)
except ResourceExistsError:
    print('A container with this name already exists')

@app.route('/save', methods=['POST'])
async def save_survey():
    """ Save the survey for the session """
    file = f'{uuid.uuid4()}.json'
    body = request.get_json()    
    blob_client = blob_service_client.get_blob_client(container=blob_container_name, blob=file)
    blob_client.upload_blob(json.dumps(body), overwrite=True) 
    #logger.info(json.dumps(body))
    return "", 200

      
# Running app
if __name__ == '__main__':
    app.run(debug=True)