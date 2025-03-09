import random
import os

def game_rand(difficultys, b):
    print("\n",difficultys, "уровень сложности! Нужно отгадать число от 1 до", b)
    a = random.randint(0, b)

    while True:
        try:
            print("\nВведите число от 0 до", b, "- ", end='')
            result = int(input())
        except ValueError:
            os.system("cls")
            print("Введите число корректно!\n")
            continue
        if 0 <= result <= b:
            if result == a:
                os.system('cls')
                print("Поздравляю с победой\n")
                break
            else:
                os.system("cls")
                print("Вы не угадали число!\n")
                continue
        else:
            os.system("cls")
            print("Число не входит в диапазон допустимых значений!\n")