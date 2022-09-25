from random import randint

def print_card_name(card_rank):
    if card_rank == 1:
        card_name = "Ace"
    elif card_rank == 11:
        card_name = "Jack"
    elif card_rank == 12:
        card_name = "Queen"
    elif card_rank == 13:
        card_name = "King"
    elif card_rank > 1 and card_rank < 13:
        card_name = str(card_rank)
    else:
        print('BAD CARD')
    if card_rank == 1 or card_rank == 8:
        print('Drew an ' + card_name)
    elif card_rank > 1 and card_rank <= 13:
        print('Drew a ' + card_name)

def draw_card():
    card = randint(1, 13)
    print_card_name(card)
    if card == 11 or card == 12 or card == 13:
        card = 10
    elif card == 1:
        card = 11
    return (card)

def print_header(message):
    print('-----------')
    print(message)
    print('-----------')

def draw_starting_hand(name):
    name = name + ' TURN'
    print_header(name)
    total = 0
    n = 1
    while n <= 2:
        card = randint(1, 13)
        print_card_name(card)
        if card == 11 or card == 12 or card == 13:
            card = 10
        elif card == 1:
            card = 11
        total = total + card
        n = n + 1
    return (total)

def print_end_turn_status(hand_value):
    print('Final hand: ' + str(hand_value) + '.')
    if hand_value == 21:
        print('BLACKJACK!')
    elif hand_value > 21:
        print('BUST.')

def print_end_game_status(user_hand, dealer_hand):
    print_header('GAME RESULT')
    if user_hand > 21:
        print('Dealer wins!')
    elif user_hand == 21 and dealer_hand == 21:
        print('Push.')
    elif user_hand == 21:
        print('You win!')
    elif dealer_hand > 21:
        print('You win!')
    elif user_hand == dealer_hand:
        print('Push.')
    elif user_hand > dealer_hand:
        print('You win!')
    elif user_hand < dealer_hand:
        print('Dealer wins!')













