from Blackjack_helper import *

user_hand = draw_starting_hand('YOUR')
while user_hand < 21:
    b = ''
    while b != 'y' and b != 'n':
        b = input('You have ' + str(user_hand) + '. Hit (y/n)? ')
        if b != 'y' and b != 'n':
            print("Sorry I didn't get that.")
    if b == 'n':
        break
    card1 = draw_card()
    user_hand = user_hand + card1
print_end_turn_status(user_hand)
dealer_hand = draw_starting_hand('DEALER')
while dealer_hand < 17:
    print('Dealer has ' + str(dealer_hand) + '.')
    dealer_hand = dealer_hand + draw_card()
print_end_turn_status(dealer_hand)
print_end_game_status(user_hand,dealer_hand)



