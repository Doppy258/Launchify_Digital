import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RequestHelp() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Request Our Help</h1>
              <p className="max-w-[700px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to tell us about your business and how we can help you succeed online.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 py-12">
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Tell us about your business and what you need help with.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company name</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website (if you have one)</Label>
                      <Input id="website" type="url" placeholder="https://yourcompany.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="help-type">What do you need help with?</Label>
                      <Select>
                        <SelectTrigger id="help-type">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="social-media">Social Media Management</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="branding">Branding & Design</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about">Tell us about your company</Label>
                      <Textarea
                        id="about"
                        placeholder="What does your company do? Who are your customers? What are your goals?"
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="needs">What specific needs do you have?</Label>
                      <Textarea
                        id="needs"
                        placeholder="Describe what you're looking for help with in detail."
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">What is your timeline?</Label>
                      <Select>
                        <SelectTrigger id="timeline">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">As soon as possible</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">What is your budget range?</Label>
                      <Select>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="over-10000">Over $10,000</SelectItem>
                          <SelectItem value="not-sure">Not sure / Need guidance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hear-about">How did you hear about us?</Label>
                      <Input id="hear-about" placeholder="How did you discover Launchify Digital?" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
