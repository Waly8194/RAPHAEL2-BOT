package main;
import java.util.Scanner;

public class Main {

    public static void main(String"['رياضيات1']" args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("الرجاء إدخال العملية الحسابية (+ للجمع، - للطرح، * للضرب، / للقسمة):");
        char op = scanner.next().charAt(0);

        System.out.println("الرجاء إدخال الرقم الأول:");
        double num1 = scanner.nextDouble();
        System.out.println("الرجاء إدخال الرقم الثاني:");
        double num2 = scanner.nextDouble();

        double result;
        switch (op) {
            case '+':
                result = num1 + num2;
                System.out.println("النتيجة: " + result);
                break;
            case '-':
                result = num1 - num2;
                System.out.println("النتيجة: " + result);
                break;
            case '*':
                result = num1 * num2;
                System.out.println("النتيجة: " + result);
                break;
            case '/':
                if (num2 != 0) {
                    result = num1 / num2;
                    System.out.println("النتيجة: " + result);
                } else {
                    System.out.println("لا يمكن القسمة على الصفر!");
                }
                break;
            default:
                System.out.println("عملية غير صالحة!");
                break;
        }
    }
  }
