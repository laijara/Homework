import random
import os

def game_numbers():
    massnum = [0] * 9

    def check_num(num):
        if massnum[num] == 0:
            massnum[num] = 1
        else:
            massnum[num] = 0

    for i in range(0, 9):
        massnum[i] = random.randint(0, 1)

    print("\nДобро пожаловать в игру! Ваша цель — сделать все элементы равными 1.\n")

    while True:
        for i in range(0, len(massnum), 3):
            print(*massnum[i:i + 3])
        try:
            vvod = int(input("\nВведите число от 0 до 8: "))
        except ValueError:
            os.system("cls")
            print("Такого номера игры не существует!\n")
            continue
        if 0 <= vvod <= 8:
            if massnum[vvod] == 0:
                massnum[vvod] = 1
            else:
                massnum[vvod] = 0
            match vvod:
                case 0:
                    check_num(1)
                    check_num(3)
                case 1:
                    check_num(0)
                    check_num(2)
                    check_num(4)
                case 2:
                    check_num(1)
                    check_num(5)
                case 3:
                    check_num(0)
                    check_num(4)
                    check_num(6)
                case 4:
                    check_num(1)
                    check_num(3)
                    check_num(5)
                    check_num(7)
                case 5:
                    check_num(2)
                    check_num(4)
                    check_num(8)
                case 6:
                    check_num(3)
                    check_num(7)
                case 7:
                    check_num(4)
                    check_num(6)
                    check_num(8)
                case 8:
                    check_num(5)
                    check_num(7)

            os.system("cls")

            if all(x == 1 for x in massnum):
                os.system("cls")
                print("ПОЗДРАВЛЯЮ С ПОБЕДОЙ!!!\n")
                break
        else:
            os.system("cls")
            print("Введите корректное число!\n")

