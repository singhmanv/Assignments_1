var operand1 = "0";
var operator = "";
var operand2 = "0";

function validate_expr(event)
{
    let currExp = document.getElementById("expr1").value;
    let pressed_btn_txt = window.event.currentTarget.defaultValue.trim();
    
    if(pressed_btn_txt === ".")
    {
        if(operator == "")
        {
            if (!operand1.includes("."))
            {
                operand1 = operand1 + pressed_btn_txt;
                document.getElementById("expr1").value = operand1;
            }
        }
        else
        {
            if (!operand2.includes("."))
            {    
                operand2 = operand2 + pressed_btn_txt;
                document.getElementById("expr1").value = operand1 + operator + operand2;
            }
        }
        
    }
    else if(parseInt(pressed_btn_txt) >=0 && parseInt(pressed_btn_txt) <= 9)
    {
        if(operator == "")
        {
            operand1 = operand1 + pressed_btn_txt;
            document.getElementById("expr1").value = operand1;
        }
        else
        {
            operand2 = operand2 + pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator + operand2;
        }
    }
    else if(pressed_btn_txt == "+")
    {
        if (operator == "")
        {
            if (operand1[operand1.length - 1] == ".")
            {
                operand1[operand1.length - 1] == "";
            }
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else if (operator != "" && operand2 == "")
        {
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else
        {
            perform_operation();
            operator = "+";
            document.getElementById("expr1").value = document.getElementById("expr1").value + operator ;
        }
    }
    else if(pressed_btn_txt == "-")
    {
        if (operator == "")
        {
            if (operand1[operand1.length - 1] == ".")
            {
                operand1[operand1.length - 1] == "";
            }
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else if (operator != "" && operand2 == "")
        {
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else
        {
            perform_operation();
            operator = "-";
            document.getElementById("expr1").value = document.getElementById("expr1").value + operator ;
        }
    }
    else if(pressed_btn_txt == "*")
    {
        if (operator == "")
        {
            if (operand1[operand1.length - 1] == ".")
            {
                operand1[operand1.length - 1] == "";
            }
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else if (operator != "" && operand2 == "")
        {
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else
        {
            perform_operation();
            operator = "*";
            document.getElementById("expr1").value = document.getElementById("expr1").value + operator ;
        }
    }
    else if(pressed_btn_txt == "/")
    {
        if (operator == "")
        {
            if (operand1[operand1.length - 1] == ".")
            {
                operand1[operand1.length - 1] == "";
            }
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else if (operator != "" && operand2 == "")
        {
            operator = pressed_btn_txt;
            document.getElementById("expr1").value = operand1 + operator ;
        }
        else
        {
            perform_operation();
            operator = "/";
            document.getElementById("expr1").value = document.getElementById("expr1").value + operator ;
        }
    }
    else
    {

    }
}

function perform_operation()
{
    let result;
    if (operator == "")
    {
        return;
    }
    else if (operator == "+")
    {
        result = parseFloat(operand1) + parseFloat(operand2);
    }
    else if(operator == "-")
    {
        result = parseFloat(operand1) - parseFloat(operand2);
    }
    else if(operator == "/")
    {
        result = parseFloat(operand1) / parseFloat(operand2);
    }
    else if(operator == "*")
    {
        result = parseFloat(operand1) * parseFloat(operand2);
    }
    operand1 = result + ""
    operand2 = ""
    operator = ""
    document.getElementById("expr1").value = result ;
}

