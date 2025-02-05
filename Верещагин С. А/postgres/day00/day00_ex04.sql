select p.name || '(' ||
'age:' || cast(p.age as VARCHAR) || ',' ||
'gender:' ||''''||p.gender||''''||','||
'address:'||''''||p.address||''''||')'
as person_info from person as p
order by person_info