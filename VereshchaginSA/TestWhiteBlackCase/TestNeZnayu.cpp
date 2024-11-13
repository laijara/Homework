#include <iostream>
#include "BlackTest.h"
using namespace std;

int testwhitecase(int a) {
	if (a < 0) cout << endl << "Возраст не может быть отрицательным!" << endl;
	else if (a < 13) cout << endl << "Дети" << endl;
	else if (a < 18) cout << endl << "Подростки" << endl;
	else if (a < 65) cout << endl << "Взорслые" << endl;
	else cout << endl << "Жмых Пожилой" << endl;
	return 0;
}

int main() {
	setlocale(LC_ALL, "ru");
	int a;
	char test;
	cout << "Каким видом тестирования хотите воспользоваться? |b - черный ящик, w - белый ящик|  - ";
	cin >> test;
	if (test == 'w') {
		cout << "Введите возвраст - ";
		cin >> a;
		testwhitecase(a);
		system("pause");
	}
	else if (test == 'b') {
		cout << "Введите возвраст - ";
		cin >> a;
		testblackcase(a);
		system("pause");
	}
	else {
		cout << endl << "Такого теста не существует!" << endl;
		system("pause");
	}
	return 0;
}