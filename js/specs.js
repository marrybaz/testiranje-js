describe('Testiranje velikaSlova funkcije', function () {
    
    it("treba da vrati sve velikim slovima", function () {
        expect(velikaSlova('zdravo')).toBe('ZDRAVO');
    })
    it("treba da primi samo ili da vrati undefined", function () {
        expect(velikaSlova(124)).toBeUndefined();
    })
    it("mogu da budu cifre u stringu", function () {
        expect(velikaSlova('zdravo123')).toBe('ZDRAVO123');
    })
    
})