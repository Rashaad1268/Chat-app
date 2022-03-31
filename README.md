# A Chat app made using Django and Flutter

**This project is still under development,
the React.js frontend is still not implemented and
the backend is particially implemented**

Install the code using

`git clone https://github.com/Rashaad1268/Chat-app.git`

----

## Installing python dependencies

*__Make sure__ that you are in the same directory as the dependency files*

#### Pip

- Run `pip install -r requirements.txt`

#### Pipenv

- Run `pipenv install`

## Setting up Django

> Please follow the [license](https://github.com/Rashaad1268/Chat-app/blob/main/LICENSE)

*__Make sure__ you [installed the dependencies](#Installing-python-dependencies)*

`cd` into the `src/backend` folder

Rename `backend/example_env.env.txt` to `.env` and fill in the values

- Run `py manage.py makemigrations`
- and `py manage.py migrate`

This should apply the migrations.

Now lets create a super user account

- Run `py manage.py createsuperuser`

- And fill in the credentials

You can use the super user account to
log into the admin panel and do fancy stuff. More about the [admin panel](https://docs.djangoproject.com/en/3.2/ref/contrib/admin/)

Now we are ready to run the server

- Run `py manage.py runserver`

Now you have success fully set up the Django backend!
