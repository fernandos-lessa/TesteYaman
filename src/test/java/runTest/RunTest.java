package runTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(features = ".\\src\\test\\resource\\features", 
format = {"pretty", "html:target/Destination"},
glue = { "step" },
tags = "@ID2")
public class RunTest {
}
