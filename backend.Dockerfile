FROM python:3.11-slim-bookworm

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y build-essential libffi-dev

COPY --link server ./server


RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir --default-timeout=100 -r ./server/requirements.txt



CMD python server/index.py