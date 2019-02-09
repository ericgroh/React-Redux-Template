# React Redux Application Template

Template Application for React with Redux and an Express.js API connected to a PostgreSQL database

## Installation
#### 1. Clone Repository
```console
	git clone git@github.com:ericgroh/React-Redux-Template.git
```

#### 2.  Install Packages
```console
	cd React-Redux-Template && yarn && yarn run client-install
```
#### 3. Create Backend `.env` file
	
		Create .env with the following command:
```console
	touch .env
```

		Add the following to the `.env` file
```
PORT=4000
SECRET_KEY=dontfeedthegoalie
ADMIN_FIRST_NAME=first
ADMIN_LAST_NAME=last
ADMIN_EMAIL=email@email.com
ADMIN_PASSWORD=password
DATABASE_HOST=localhost
DATABASE_NAME=database_name
DATABASE_USERNAME=username
DATABASE_PASSWORD=password
```
### 4. Create Client `.env` file
    Create `.env` with the following command:
    ```console
        touch client/.env
    ```
    	
    Add the following to the `.env` file
```
PORT=4000
SECRET_KEY=dontfeedthegoalie
ADMIN_FIRST_NAME=first
ADMIN_LAST_NAME=last
ADMIN_EMAIL=email@email.com
ADMIN_PASSWORD=password
DATABASE_HOST=localhost
DATABASE_NAME=database_name
DATABASE_USERNAME=username
DATABASE_PASSWORD=password
```
