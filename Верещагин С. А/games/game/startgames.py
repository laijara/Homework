import os
from data__libs.system__properties__lib.list_games import *
from data__libs.games__lib.g__game_rand.game_rand_start import game_random
from data__libs.games__lib.g__game_massive_numbers.gamemassivenumbers import game_numbers

lists_games()
GameSelection = 0
quantity_games = 2
while True:
    try:
        GameSelection = int(input("Введите номер игры(только число) - "))
    except ValueError:
        os.system("cls")
        print("Такого номера игры не существует!")
        continue
    if 1 <= GameSelection <= quantity_games:
        match GameSelection:
            case 1:
                os.system("cls")
                game_random()
            case 2:
                os.system("cls")
                game_numbers()
        break
    else:
        os.system("cls")
        print("Введите корректный номер игры!")
os.system("pause")