#include <iostream>
#include "BlackTest.h"
using namespace std;

int testblackcase(int a) {
	if (a < 0) cout << endl << "������� �� ����� ���� �������������!" << endl;
	else if (a < 13) cout << endl << "����" << endl;
	else if (a < 18) cout << endl << "���������" << endl;
	else if (a < 65) cout << endl << "��������" << endl;
	else cout << endl << "���� �������" << endl;
	return 0;
}