package controllers;

import javax.inject.Inject;
import play.mvc.*;
import play.libs.ws.*;
import java.util.concurrent.CompletionStage;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.fasterxml.jackson.core.type.*;
import java.util.*;
import java.io.*;
import java.lang.*;


/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {
  @Inject WSClient ws;
  /**
   * An action that renders an HTML page with a welcome message.
   * The configuration in the <code>routes</code> file means that
   * this method will be called when the application receives a
   * <code>GET</code> request with a path of <code>/</code>.
   */
  public CompletionStage<Result> index() {
    return ws.url("http://localhost:9001/get").setContentType("application/json")
      .get()
      .thenApply(r -> {
        JsonNode wasd = r.asJson();
        ObjectMapper mapper = new ObjectMapper();
        List<String> notes = null;
        try {
          notes = mapper.readValue(wasd.toString(), new TypeReference<List<String>>(){});
        } catch(Exception ex){
          notes = new ArrayList<String>();
        }
        return ok(views.html.index.render(notes));
      });
  }

  public Result one() {
    return ok(views.html.one.render());
  }

  public Result two() {
    return ok(views.html.two.render());
  }

  public Result inp_out(String text) {
    ws.url("http://localhost:9001/post").setContentType("text/plain").post(text);
    return redirect("/");
  }  
  
  public Result reset() {
    ws.url("http://localhost:9001/reset").get();
    return redirect("/");
  }  
}
