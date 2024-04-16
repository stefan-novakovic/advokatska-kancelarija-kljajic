# Advokatska kancelarija Kljajić

![react](docs/images/react.png)
![plus](docs/images/plus.png)
![spring-boot](docs/images/spring-boot.png)


# Frontend (React)
- `../${PROJECT_ROOT}`

# Backend (Java + Spring Boot)
- `../backend/src/main/java`

# Build
```
mvn clean -Pnative native:compile
```

# Linux
https://www.graalvm.org/22.1/reference-manual/native-image/

Set env variable `GRAALVM_HOME` and point to the GraalVM

a) Ubuntu
- Prerequisite
```
sudo apt-get install build-essential libz-dev zlib1g-dev
```
