def lists_games():
    print("Добро пожаловать в сборник игр!")
    print("\nСписок игр")
    lists = ["Угадай число", "Плиточки"]
    for i, game in enumerate(lists, start=1):
        print(f"{i}. {game}")