
export function addToDb(id) {
    let db = [];
    const storedDB = JSON.parse(localStorage.getItem('applied'));
    storedDB ? db = storedDB : db;

    const exist = db.includes(id);
    if (exist) {
        alert('already exist');
    }
    else {
        db.push(id);
        alert('Wow,Your applied this job');

    }
    localStorage.setItem('applied', JSON.stringify(db));
}