from tkinter import Tk,Frame,Label,Button,Text

'Constructor for the Puzzle'
class Puzzle(Frame):
    
    def __init__(self, parent=None):

        Frame.__init__(self, parent)
        self.pack()

        # Label(self, borderwidth=0, width=10, height= 5, text='1').grid(row=0,column=0)
        # Label(self, borderwidth=0, width=10, height= 5, text='2').grid(row=0,column=1)
        # Label(self, borderwidth=0, width=10, height= 5, text='3').grid(row=0,column=2)
        # Label(self, borderwidth=0, width=10, height= 5, text='8').grid(row=1,column=0)
        # Label(self, borderwidth=0, width=10, height= 5, text='_').grid(row=1,column=1)
        # Label(self, borderwidth=0, width=10, height= 5, text='4').grid(row=1,column=2)
        # Label(self, borderwidth=0, width=10, height= 5, text='7').grid(row=2,column=0)
        # Label(self, borderwidth=0, width=10, height= 5, text='6').grid(row=2,column=1)
        # Label(self, borderwidth=0, width=10, height= 5, text='5').grid(row=2,column=2)

        buttons = [[1,2,3],
                   [8,0,4],
                   [7,6,5]]
               
        # create and place buttons in appropriate row and column
        for r in range(3):
            for c in range(3):

                b = Button(self,       # button for symbol buttons[r][c]
                           text=buttons[r][c],
                           width=5,
                           command=self.slide('Up'))          # cmd() is the handler
                b.grid(row=r+1, column=c)        # entry is in row 0

        text = Text(parent)
        text.bind('<KeyPress-Up>', self.slide('Up'))
        text.bind('<KeyPress-Down>', self.slide('Down'))
        text.bind('<KeyPress-Left>', self.slide('Left'))
        text.bind('<KeyPress-Right>', self.slide('Right'))

        a = Button(self, text='Up', width=3, command=self.slide('Up')).grid(row=4,column=0)
        # b = Button(self, text=count, width=3, command=cmd)

    def slide(self, key):
        if key == 'Up':
            self.moveGap('down')
        if key == 'Down':
            self.moveGap('up')
        if key == 'Left':
            self.moveGap('right')
        if key == 'Right':
            self.moveGap('left')
    
    def moveGap(self, direction):
        print(direction)

    # returns the board to the start position
    def startPosition(self):
        print('placeholder')

    def record(event):
        print('char = {}'.format(event.keysym)) # print key symbol

if __name__ == '__main__':
   Puzzle().mainloop()