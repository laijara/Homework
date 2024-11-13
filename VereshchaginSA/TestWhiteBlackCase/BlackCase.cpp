#include <iostream>
#include "BlackTest.h"
using namespace std;

int testblackcase(int a) {
	if (a < 0) cout << endl << "Возраст не может быть отрицательным!" << endl;
	else if (a < 13) cout << endl << "Дети" << endl;
	else if (a < 18) cout << endl << "Подростки" << endl;
	else if (a < 65) cout << endl << "Взорслые" << endl;
	else cout << endl << "Жмых Пожилой" << endl;
	return 0;
}