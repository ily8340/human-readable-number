module.exports = function toReadable(number)
 {
        const numbers = [
            '', 
            'one', 
            'two', 
            'three', 
            'four', 
            'five',
             'six', 
             'seven',
            'eight', 
            'nine',
            'ten', 
            'eleven', 
            'twelve', 
            'thirteen', 
            'fourteen', 
            'fifteen',
            'sixteen', 
            'seventeen', 
            'eighteen', 
            'nineteen'
        ];

        const decimal = [
        '', 
        '', 
        'twenty ', 
        'thirty ', 
        'forty ', 
        'fifty ',
        'sixty ', 
        'seventy ', 
        'eighty ', 
        'ninety '
        ];

        const hundreds = [
        '', 
        'one hundred ', 
        'two hundred ', 
        'three hundred ', 
        'four hundred ',
        'five hundred ', 
        'six hundred ', 
        'seven hundred ', 
        'eight hundred ', 
        'nine hundred '
        ];

        if (number === 0) return 'zero';

        const hundred = Math.floor(number / 100);
        let result = hundreds[hundred];
        let dec = number - hundred * 100;

        if (dec < 20) {
            result += numbers[dec];
        } else {
            dec = Math.floor(dec / 10);
            const digit = number - hundred * 100 - dec * 10;
            result += decimal[dec] + numbers[digit];
        }
        return result.trim();
    }
