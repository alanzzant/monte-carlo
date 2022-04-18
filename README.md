# pi-monte-carlo

The Monte Carlo simulation is a method of determinig the decimals of the Pi number through randomness.

Let there be a square with 4 L sides, which area would be equal to L<sup>2</sup>. Let there also be a circle inside the square with a radius equal to L/2, which area is equal to π*r<sup>2</sup> or, in other words, π\*(L/2)<sup>2</sup>.

The relationship between both areas is written as following:
> (π*(L/2)<sup>2</sup>)  /  (L<sup>2</sup>)

And after simplifying the expression we obtain:
> => (π\*(L<sup>2</sup>/4)) / L<sup>2</sup>

> => π\*L<sup>2</sup> / 4\*L<sup>2</sup>

> => π/4

That's how, knowing the area of both the square and the inscript circle, we can estimate Pi.

In order to get the area of both figures we apply the Monte Carlo method, which consists of 'throwing' darts randomly along the 'board' (the square with sides L). The total of darts on the square will approximate the total area of it, while the total of darts on the circle will approximate to its total area. Thus, the more darts we get on the 'board' the more precise our approximation will be. After counting our darts, our approximation  to the area of each figure, and dividing them, we obtain π/4.
