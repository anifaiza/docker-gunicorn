FROM python:3

RUN python3 -m pip install --upgrade pip 

WORKDIR /home/anika/myWorkingSpace/postgreSQL/blu

COPY . /home/anika/myWorkingSpace/postgreSQL/blu

RUN pip3 install -r requirements.txt

ENV FLASK_ENV = "docker"

EXPOSE 5000

ENTRYPOINT [ "python3" ]

CMD ["run.py", "runserver", "-h", "0.0.0.0", "-p", "5000", "-d"]