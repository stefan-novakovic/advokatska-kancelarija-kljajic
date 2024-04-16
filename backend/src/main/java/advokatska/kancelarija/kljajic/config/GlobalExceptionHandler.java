package advokatska.kancelarija.kljajic.config;

import lombok.NonNull;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;
import java.util.Objects;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        final List<String> errorMessages = ex.getBindingResult().getFieldErrors().stream()
                .map(this::printFieldError)
                .toList();

        return new ResponseEntity<>(errorMessages, headers, status);
    }

    private String printFieldError(@NonNull FieldError fieldError) {
        final String fieldName = fieldError.getField();
        final String invalidValue = Objects.toString(fieldError.getRejectedValue(), "null");
        final String quotedInvalidValue = invalidValue.isEmpty() ? invalidValue : "'%s'".formatted(invalidValue);
        final String message = fieldError.getDefaultMessage();

        return "%s: %s %s".formatted(fieldName, quotedInvalidValue, message);
    }
}
