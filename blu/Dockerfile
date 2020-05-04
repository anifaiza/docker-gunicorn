FROM python:latest

RUN python3 -m pip install --upgrade pip 

WORKDIR /home/anika/myWorkingSpace/postgreSQL/blu

COPY . /home/anika/myWorkingSpace/postgreSQL/blu

ENV POSTGRES_HOST_AUTH_METHOD=trust
ENV POSTGRES_HOST=db
ENV POSTGRES_PORT=5432
ENV POSTGRES_DB=postgres
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=anika

RUN pip3 install -r requirements.txt

EXPOSE 5000

ENTRYPOINT ["python3"]

CMD ["run.py", "runserver", "-h", "0.0.0.0", "-p", "5000", "-d"]