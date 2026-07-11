package org.example;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
public class AAATest {
    private int number;
    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup method executed");}
    @Test
    public void testAddition() {
        int value = number;
        int result = value + 5;
        assertEquals(15, result);}
    @After
    public void tearDown() {
        System.out.println("Teardown method executed");
    }
}
