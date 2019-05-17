package core.utils;

import com.google.gson.JsonObject;
import org.apache.log4j.Logger;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class FileReader {

    public static JsonObject readCredentials() {
        Logs.getInstance().getLog().info("Read the credentials of the user, email and password");
        Properties prop = new Properties();
        InputStream input = null;
        JsonObject user = new JsonObject();
        try {
            input = new FileInputStream("environment.properties");
            prop.load(input);
        } catch (IOException event) {
            event.printStackTrace();
        }
        user.addProperty("user", prop.get("user").toString());
        user.addProperty("password", prop.get("pass").toString());
        user.addProperty("username", prop.get("userName").toString());
        return user;
    }
}
