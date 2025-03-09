import os
from data__libs.games__lib.g__game_rand.game_rand_func.game_rand_lib import game_rand

def game_random():
    print("Добро пожаловать в игру Угадай число!\n")

    while True:
        try:
            difficulty_level= int(input("\nПожалуйста выберите уровень сложности: 1 - Легкий, 2 - Средний, 3 - Сложный, 4 - Свой: "))
        except ValueError:
            os.system("cls")
            print("Такого номера сложности не существует!\n")
            continue
        if 1 <= difficulty_level <= 4:
            match difficulty_level:
                case 1:
                    game_rand("Легкий", 10)
                case 2:
                    game_rand("Средний", 50)
                case 3:
                    game_rand("Сложный", 100)
                case 4:
                    while True:
                        try:
                            x = int(input("Введите число - "))
                        except ValueError:
                            os.system("cls")
                            print("Такого числа в игре не существует!\n")
                            continue
                        if 0 <= x:
                            game_rand("Свой", x)
                            break
                        else:
                            os.system("cls")
                            print("Введите число больше 0!\n")
            break
        else:
            os.system("cls")
            print("Введите корректный уровень сложности!\n")